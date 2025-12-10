function Contacts() {
  return (
    <section id="contacts" className=" px-6 md:px-12 mb-20 scroll-mt-32">
      <div className=" container mx-auto max-w-5xl p-12 md:p-24 text-center bg-stone-100 shadow">
        <h2 className=" text-3xl md:text-5xl mb-8">Looking for work</h2>
        <p className=" clr-secondary max-w-md mx-auto mb-12">
          Currently looking for new opportunities in frontend development.
        </p>
        <a
          href="mailto:rushikeshaundhakar715@gmail.com"
          className=" contact-btn px-8 py-4 text-sm tracking-widest"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}

export default Contacts;
