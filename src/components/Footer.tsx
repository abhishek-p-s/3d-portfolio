import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from ".././constants";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response, "RES");
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <footer className="w-full py-12 px-4 mt-10" id="chatWithMe">
      <div className="max-w-4xl mx-auto rounded-3xl shadow-xl bg-black/40 backdrop-blur-md p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-200 mb-2 [text-shadow:0_2px_8px_#000]">
          Chat with me
        </h1>
        <p className="text-center text-indigo-300 mb-8 text-lg">
          I am always excited to work on awesome projects. Message me and let's
          discuss over a coffee!
        </p>
        <form
          className="flex flex-col gap-6 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full rounded-lg px-4 py-3 bg-indigo-950/80 text-indigo-100 placeholder-indigo-400 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full rounded-lg px-4 py-3 bg-indigo-950/80 text-indigo-100 placeholder-indigo-400 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <textarea
            className="w-full rounded-lg px-4 py-3 bg-indigo-950/80 text-indigo-100 placeholder-indigo-400 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition min-h-[120px] resize-none"
            placeholder="Message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-indigo-50 font-semibold shadow-lg hover:from-indigo-400 hover:to-purple-500 transition"
          >
            Submit
          </button>
        </form>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="text-center text-indigo-300 text-sm md:text-base"
            data-aos="fade-up"
          >
            <b>
              No <i className="fa fa-copyright"></i> copyright issues.
            </b>
            <br />
            Feel free to copy. If you need any help, ping me!
          </div>

          <p
            className="font-[Sacramento] text-4xl text-[#41b0bf]"
            data-aos="fade-up"
          >
            Abhishek P S
          </p>

          <div className="md:w-auto w-full" data-aos="fade-up">
            <p className="text-center text-indigo-300 text-sm mb-3">
              You can find me everywhere
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://in.linkedin.com/in/abhishek-p-s-83a2311b6?trk=public_profile_browsemap"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin text-2xl md:text-3xl text-[#41b0bf] hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009612692029"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook text-2xl md:text-3xl text-[#41b0bf] hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="https://www.instagram.com/___abhishek___p_s_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram text-2xl md:text-3xl text-[#41b0bf] hover:scale-110 transition-transform"></i>
              </a>
              <a
                href="https://github.com/abhishek-p-s"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition"
                aria-label="GitHub"
              >
                <i className="fa fa-github text-2xl md:text-3xl text-[#41b0bf] hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
