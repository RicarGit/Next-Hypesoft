import * as S from './ContactForm.styles'

import Image from 'next/image'
import sendIcon from './sendIcon.svg'

export const ContactForm = () => {
  return (
    <S.ContactForm method='POST'>
      <S.FormInput type='text' name='fullname' placeholder='Full name' required />
      <S.FormInput type='email' name='email' placeholder='Email address' required />
      <S.FormInput type='text' name='subjects' className='fullWidth' placeholder='Subjects' required />
      <S.FormTextArea placeholder='Message' />

      <S.SubmitButton type='submit'>
        Send Message
        <Image src={sendIcon} alt='submit button icon' />
      </S.SubmitButton>

    </S.ContactForm>
  )
}