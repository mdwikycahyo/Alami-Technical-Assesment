const Contact = (props) => {
  const { data } = props;
  return (
    <>
      <h1 className="text-6xl mt-14 font-bold leading-normal">Let's Work Together</h1>
      <p
        className="leading-10 text-xl mb-14"
        dangerouslySetInnerHTML={{ __html: data.closingStatement }}
      />
      <div className="w-1/4 flex items-center justify-center mb-14">
        <div className="flex items-center justify-center cursor-pointer hover:font-bold">
          <div className="bg-[#363636] rounded-full w-[50px] h-[50px]" />
          <p className="-ml-[25px] mr-2 font-mono">Say Hello!</p>
          <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
        </div>
      </div>
      <div className="mt-4 flex items-center my-5">
        <p>© 2023 Muhammad Dwiky Cahyo Wicaksono</p>
        <p className="mx-20">|</p>
        <p>
          <i className="bi bi-linkedin text-3xl mr-5" />
          <i className="bi bi-github text-3xl mx-5" />
          <i className="bi bi-instagram text-3xl mx-5" />
          <i className="bi bi-medium text-3xl mx-5" />
          <i className="bi bi-envelope-fill text-3xl mx-5" />
        </p>
      </div>
    </>
  );
};

export default Contact;
