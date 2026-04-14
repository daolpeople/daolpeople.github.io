import PageHero from '../components/PageHero'
import { useForm, ValidationError } from '@formspree/react'

const FORMSPREE_FORM_ID = 'xykbwyrk'

export default function Contact() {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID)

  return (
    <main>
      <section className="section">
        <div className="container">
          <PageHero
            title="문의하기"
            description="필요한 내용을 남겨주시면 빠르게 답변 드립니다."
            image="assets/images/Gemini_Generated_Image_szsq4bszsq4bszsq.png"
          />

          {state.succeeded ? (
            <div className="contact-form contact-form--success">
              <p className="contact-form-success">
                등록되었습니다.
                <span className="contact-form-success-sub">빠르게 답변 드리겠습니다.</span>
              </p>
              <div className="contact-form-actions">
                <button type="button" className="btn" onClick={reset}>
                  돌아가기
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" name="simple-contact-form" onSubmit={handleSubmit}>
              <label htmlFor="email-address">답변 받을 메일</label>
              <input
                type="email"
                name="email"
                id="email-address"
                placeholder="yourname@domain"
                required
              />
              <ValidationError
                prefix="답변 받을 메일"
                field="email"
                errors={state.errors}
                className="contact-form-error"
              />
              <label htmlFor="message">문의 내용</label>
              <textarea rows="5" name="message" id="message" placeholder="문의 내용" required></textarea>
              <ValidationError
                prefix="문의 내용"
                field="message"
                errors={state.errors}
                className="contact-form-error"
              />
              <input type="hidden" name="_subject" id="email-subject" value="다올피플 문의하기에 새 문의가 접수되었습니다." />
              <button className="btn" type="submit" disabled={state.submitting}>
                문의하기
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
