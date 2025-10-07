import { useState, useRef } from "react";
import success from "../assets/success.png"
import axios from "axios";

const ContactForm = () => {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    YourName: "",
    YourEmail: "",
    PhoneNumber: "",
    YourServices: "",
    YourMessage: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    successMessage: "",
    errorMessage: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.YourName ||
      !formData.YourEmail ||
      !formData.PhoneNumber ||
      !formData.YourServices ||
      !formData.YourMessage
    ) {
      setFormStatus({
        errorMessage: "Please fill in all fields.",
        successMessage: "",
      });
      setShowModal(true);
      return;
    }

    setFormStatus({ isSubmitting: true, successMessage: "", errorMessage: "" });

    const baseURL = process.env.REACT_APP_API_BASE_URL;
    axios
    .post(`${baseURL}contactus`, formData, {
      headers: {
        "Content-Type": "application/json", 
      },
    })
    .then((response) => {
      setFormData({
        YourName: "",
        YourEmail: "",
        PhoneNumber: "",
        YourServices: "",
        YourMessage: "",
      });
      setFormStatus({
        isSubmitting: false,
        successMessage: "Our team will contact you soon..!",
        errorMessage: "",
      });
      setShowModal(true);
    })
    .catch((error) => {
      console.error(error); 
  
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors); // Set backend validation errors
        setFormStatus({
          isSubmitting: false,
          successMessage: "",
          errorMessage: "Failed to send message. Please try again.",
        });
      } else {
        setFormStatus({
          isSubmitting: false,
          successMessage: "",
          errorMessage: "Something went wrong! Please try again later.",
        });
      }
      setShowModal(true);
    });
  }  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="py-[50px] bg-[#7c78781a] dark:bg-black dark:text-white">
        <div className="container">
          <div className="row">
            <div className="flex justify-center">
              <div className="w-full xl:w-10/12 3xl:w-8/12 dark:shadow-chooseBox2 shadow-custom p-6 sm:p-8 rounded-lg border-[3px]">
                <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Secondary font-semibold mb-[20px] md:mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
                  <h2>Get In touch</h2>
                </div>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-wrap md:p-[20px] justify-center"
                >
                  <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                    <label className="font-Secondary">
                      Your Name <span className="text-[#0073e9]">*</span>
                    </label>
                    <input
                      className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid bg-[#7c787800] dark:bg-black border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                      type="text"
                      placeholder="Name"
                      name="YourName"
                      value={formData.YourName}
                      onChange={handleChange}
                      disabled={formStatus.isSubmitting}
                      required
                    />
                  </div>

                  <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                    <label className="font-Secondary">
                      Your Email <span className="text-[#0073e9]">*</span>
                    </label>
                    <input
                      className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid bg-[#7c787800] dark:bg-black border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                      type="email"
                      placeholder="Email"
                      name="YourEmail"
                      value={formData.YourEmail}
                      onChange={handleChange}
                      disabled={formStatus.isSubmitting}
                      required
                    />
                    {errors.YourEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.YourEmail}</p>
                    )}
                  </div>

                  <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                    <label className="font-Secondary">
                      Your Phone Number
                      <span className="text-[#0073e9]">*</span>
                    </label>
                    <input
                      className="pt-[20px] pb-[10px] w-full border-b-[2px] border-solid bg-[#7c787800] dark:bg-black border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                      type="text"
                      placeholder="PhoneNumber"
                      name="PhoneNumber"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                      disabled={formStatus.isSubmitting}
                      required
                    />
                    {errors.PhoneNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.PhoneNumber}</p>
                    )}
                  </div>

                  <div className="w-full md:w-6/12 md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                    <label className="font-Secondary">
                      Your Services <span className="text-[#0073e9]">*</span>
                    </label>
                    <select
                      name="YourServices"
                      className="pt-[20px] pb-[10px] text-[#7591B5] w-full border-b-[2px] border-solid bg-[#7c787800] dark:bg-black border-Primary font-Secondary font-medium"
                      value={formData.YourServices}
                      onChange={handleChange}
                      disabled={formStatus.isSubmitting}
                      required
                    >
                      <option value="">Select Services</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Game Development">Game Development</option>
                    </select>
                  </div>

                  <div className="w-full md:px-[10px] py-[20px] wow animate__animated animate__zoomIn">
                    <label className="font-Secondary">
                      Your Message <span className="text-[#0073e9]">*</span>
                    </label>
                    <textarea
                      name="YourMessage"
                      value={formData.YourMessage}
                      onChange={handleChange}
                      disabled={formStatus.isSubmitting}
                      placeholder="Your Message"
                      cols="20"
                      rows="6"
                      required
                      className="pt-[20px] w-full border-b-[2px] border-solid bg-[#7c787800] dark:bg-black border-Primary font-Secondary placeholder:font-Secondary placeholder:font-medium placeholder:text-[#7591B5] focus-visible:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-[20px] wow animate__animated animate__zoomIn">
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className={`cursor-custom cursor-custom_light relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-2 px-3 sm:px-5 font-Secondary text-white text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold tracking-wider transition-all duration-[0.5s] bg-Primary ${
                        formStatus.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {formStatus.isSubmitting ? "Submitting..." : "Send Message"}
                      <span className="absolute inset-0 w-[300px] h-[200px] bg-[#ffffff8e] group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50"
            onClick={closeModal}
          >
            <div
              className="flex flex-col justify-center items-center p-8 w-9/12 md:w-7/12 lg:w-5/12 3xl:w-3/12 rounded-lg shadow-lg bg-white animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            >
              {formStatus.errorMessage && (
                <div className="text-red-600 font-bold font-Secondary text-[14px] sm:text-xl">
                  {formStatus.errorMessage}
                </div>
              )}
              {formStatus.successMessage && (
                <div className="text-green-600 font-bold font-Secondary text-[14px] sm:text-xl">
                  <div className="image flex justify-center mb-4">
                    <img src={success} alt="suucess_image" className="w-10 h-10"/>
                  </div>
                  {formStatus.successMessage}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactForm;
