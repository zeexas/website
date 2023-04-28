function ContactPage() {
  const h3Style = 'uppercase inline-block font-bold';

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <address className="w-[65%] h-[40%] flex flex-col text-teal-700 text-[1.3rem]">
        <h2 className="text-5xl uppercase font-bold pb-4 border-solid border-0 border-b-2 border-teal-700">
          Contact
        </h2>
        <section className="flex flex-row flex-wrap mt-6">
          <div className="w-1/2">
            <h3 className={h3Style}>Mail</h3>
            <span className="ml-12 my_underline">
              <a
                href="mailto:lee_hobb@rambler.ru"
                target="_blank"
                rel="noreferrer"
              >
                lee_hobb@rambler.ru
              </a>
            </span>
          </div>
          <div className="w-1/2 flex">
            <h3 className={h3Style}>Social Medias</h3>
            <ul className="flex flex-col ml-12 gap-1">
              <li className="my_underline">
                <a
                  href="https://github.com/zeexas"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </li>
              <li className="my_underline">
                <a
                  href="https://www.linkedin.com/in/zeexas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin
                </a>
              </li>
            </ul>
          </div>
        </section>
      </address>
    </div>
  );
}

export default ContactPage;
