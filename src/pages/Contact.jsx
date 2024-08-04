import React from "react";
import Hero from "../_components/Hero";
import MyButton from "../_components/MyButton";
import MyInput from "../_components/MyInput";

const Contact = () => {
  return (
    <div>
      <Hero path="Contact Us" />
      <div className=" bg-[#F8F8F8] respPx20 py-20">
        <h2 className="font-extrabold text-40px">Contact Us</h2>
        <div className=" grid 960px:grid-cols-2 grid-cols-1 gap-8  ">
          <ContactForm />
          <div className=" flex flex-col  justify-between 960px:gap-0 gap-12 ">
            <p className="text-[15px] my-2 leading-loose ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              recusandae voluptates doloremque veniam temporibus porro culpa
              ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.
              Dolore, labore. Accusamus nulla sed cum aliquid exercitationem
              debitis error harum porro maxime quo iusto aliquam dicta modi
              earum fugiat, vel possimus commodi, deleniti et veniam, fuga ipsum
              praesentium. Odit unde optio nulla ipsum quae obcaecati! Quod esse
              natus quibusdam asperiores quam vel, tempore itaque architecto
              ducimus expedita
            </p>
            <div className="font-medium  text-lg text-slate flex flex-col ">
              <a
                href="tel:+880 20 5784 3248 "
                className="hover:text-sunrise transitional"
              >
                +880 20 5784 3248
              </a>
              <a
                href="mailto:yourmail@email.com"
                className="hover:text-sunrise transitional"
              >
                yourmail@email.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p>71 Shelton Street</p>
              <p>London WC2H 9JQ England</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.914833388325!2d-0.12623612315785798!3d51.51477846016399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccac69823f%3A0x4eb63cbd6bcc52c7!2sShelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2s!4v1722580790788!5m2!1sen!2s"
          height="450"
          className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <MyInput placeholder={"Your Name"} name={"name"} />
      <MyInput placeholder={"Your Email"} name={"email"} type="email" />
      <MyInput placeholder={"Subject"} name={"subject"} />
      <textarea
        rows={6}
        className="w-full my-2 border outline-none focus:border-sunrise py-4   px-6 
        placeholder:text-gray-500"
        placeholder="Your Message"
      ></textarea>
      <MyButton text={"Send Message"} />
    </form>
  );
};
