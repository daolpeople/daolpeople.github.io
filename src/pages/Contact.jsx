import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <PageHero
            title="문의하기"
            description="필요한 내용을 남겨주시면 빠르게 답변 드립니다."
            image="assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png"
          />

          <form
            className="contact-form"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/xknqokvd"
            method="post"
          >
            <label htmlFor="email-address">답변 받을 메일</label>
            <input type="email" name="_replyto" id="email-address" placeholder="yourname@domain" required />
            <label htmlFor="message">문의 내용</label>
            <textarea rows="5" name="message" id="message" placeholder="문의 내용" required></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
            <button className="btn" type="submit">문의하기</button>
          </form>
        </div>
      </section>
    </main>
  )
}

