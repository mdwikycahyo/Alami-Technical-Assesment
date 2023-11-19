const Contact = (props) => {
  const { data } = props;
  return (
    <>
      <h1 className="text-6xl mt-14 font-bold leading-normal">
        Let's Work Together
      </h1>
      <p
        className="leading-10 text-xl mb-14"
        dangerouslySetInnerHTML={{ __html: data.closingStatement }}
      />
      <div className="w-1/4 flex items-center justify-center mb-14">
        <div
          className="flex items-center justify-center cursor-pointer hover:font-bold"
          onClick={() => {
            const emailAddress = data.email;
            const subject = "Hello";
            const body = "I hope this email finds you well.";

            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;
          }}
        >
          <div className="bg-[#363636] rounded-full w-[50px] h-[50px]" />
          <p className="-ml-[25px] mr-2 font-mono">Say Hello!</p>
          <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
        </div>
      </div>
      <div className="mt-4 flex items-center my-5">
        <p>© 2023 Muhammad Dwiky Cahyo Wicaksono</p>
        <p className="mx-20">|</p>
        <p>
          <i
            className="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer mr-5"
            onClick={() => window.open(data.linkedin, "_blank")}
          />
          <i
            className="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.github, "_blank")}
          />
          <i
            className="bi bi-instagram text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.instagram, "_blank")}
          />
          <i
            className="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => window.open(data.medium, "_blank")}
          />
          <i
            className="bi bi-envelope-fill text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
            onClick={() => {
              const emailAddress = data.email;
              const subject = "Hello";
              const body = "I hope this email finds you well.";

              window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;
            }}
          />
        </p>
      </div>
    </>
  );
};

export default Contact;
