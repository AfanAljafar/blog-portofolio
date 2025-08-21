const Footer = ({ credit }) => {
  return (
    <footer className="w-full h-24 flex items-center justify-center bg-sky-950 drop-shadow-[0_6px_6px_rgba(0,255,255,0.5)] text-white">
      <p className="text-sm text-center">{credit}</p>
    </footer>
  );
};
Footer.displayName = "Footer";

export default Footer;
