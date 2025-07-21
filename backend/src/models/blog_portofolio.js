const dbPool = require("../config/dataBase");

const createTestimonial = (name, email, position, testimonial, rating) => {
  const SQL_Create_Testimonial = `INSERT INTO testimonials (name, email, position, testimonial, rating) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  return dbPool.query(SQL_Create_Testimonial, [
    name,
    email,
    position,
    testimonial,
    rating,
  ]);
};

const displayTestimonial = () => {
  const SQL_Display_Testimonial = `SELECT * FROM testimonials`;

  return dbPool.query(SQL_Display_Testimonial);
};

const submitMessage = (first_name, last_name, email, phone, message) => {
  const SQL_Submit_Message = `INSERT INTO portofolio_message (first_name, last_name, email, phone, message) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  return dbPool.query(SQL_Submit_Message, [
    first_name,
    last_name,
    email,
    phone,
    message,
  ]);
};

module.exports = { createTestimonial, displayTestimonial, submitMessage };
