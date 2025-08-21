import React from "react";
import mqtt from "mqtt";
import toast, { Toaster } from "react-hot-toast";

const MicrocontrollerProject = () => {
  const ESP32_URL = "http://10.10.36.6";

  const handleControlHTTP = async (action: any) => {
    try {
      await fetch(`${ESP32_URL}/led/${action}`, { method: "POST" });
      console.log(`LED ${action} sukses`);
      if (action === "on") {
        toast.success("LED ON SUCCESS (HTTP)!", {
          duration: 700,
        });
      }
      if (action === "off") {
        toast("LED OFF SUCCESS (HTTP)", {
          duration: 700,
        });
      }
    } catch (error) {
      console.error(`FAILED ${action} LED (HTTP):`, error);
      toast.error(`FAILED ${action} LED (HTTP)`, {
        duration: 700,
      });
    }
  };

  const client = mqtt.connect(import.meta.env.VITE_MQTT_URL, {
    username: import.meta.env.VITE_MQTT_USER,
    password: import.meta.env.VITE_MQTT_PASS,
    protocol: "wss",
  });

  client.on("connect", () => {
    console.log("Connected to HiveMQ Cloud");
    client.subscribe("lampu/control");
  });

  client.on("error", (err) => {
    console.error("MQTT Error:", err);
    toast.error("MQTT connection error");
  });

  const handleControlMQTT = (action) => {
    console.log("MQTT Control:", action);
    client.publish("lampu/control", action);
    if (action === "on") {
      toast.success("LED ON SUCCESS (MQTT)!", {
        duration: 700,
      });
    }
    if (action === "off") {
      toast("LED OFF SUCCESS (MQTT)", {
        duration: 700,
      });
    }
  };

  return (
    <div className="min-h-screen bg-sky-950 px-4 py-8 ">
      <Toaster />
      {/* button MQTT */}
      <div className="flex flex-col items-center gap-4 p-4 pt-[60px] text-white">
        <h1 className="text-2xl font-bold">LED Control ESP32 (MQTT)</h1>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleControlMQTT("on")}
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-700"
          >
            LED ON
          </button>
          <button
            onClick={() => handleControlMQTT("off")}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-800"
          >
            LED OFF
          </button>
        </div>
      </div>

      {/* button local HTTP */}
      <div className="flex flex-col items-center gap-4 p-4 pt-[60px] text-white">
        <h1 className="text-2xl font-bold">LED Control ESP32 (HTTP)</h1>
        <div className="flex gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => handleControlHTTP("on")}
          >
            LED ON
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
            onClick={() => handleControlHTTP("off")}
          >
            LED OFF
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicrocontrollerProject;
