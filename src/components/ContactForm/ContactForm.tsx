import * as S from './ContactForm.styled'

import Image from 'next/image'
import { Assets } from '~/assets'

export const ContactForm = () => {
  return (
    <S.ContactForm method='POST'>
      <S.FormInput
        type='text'
        name='fullname'
        placeholder='Full name'
        required
      />
      <S.FormInput
        type='email'
        name='email'
        placeholder='Email address'
        required
      />
      <S.FormInput
        type='text'
        name='subjects'
        className='fullWidth'
        placeholder='Subjects'
        required
      />
      <S.FormTextArea placeholder='Message' />

      <S.SubmitButton type='submit'>
        Send Message
        <Image src={Assets.SendIcon} width={24} height={24} alt='send icon' />
      </S.SubmitButton>
    </S.ContactForm>
  )
}