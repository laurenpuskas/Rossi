import React from 'react'

import Modal from '../UI/Modal'
import Form from '../UI/Form'
import Input from '../UI/Form/Input'

const Contact = (props) => {
  return (
    <Modal
      onClick={props.onClick}
      title={`Contact Us`}
      subtitle={`All the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary, making this the first true generator on the internet.`}
    >
      <Form name={`contactform`} send={`Send`} action={`/success`}>
        <Input type={`text`} name={`firstname`} placeholder={`First Name`} />
        <Input type={`text`} name={`lastname`} placeholder={`Last Name`} />
        <Input type={`tel`} name={`phone`} placeholder={`Phone`} />
        <Input type={`email`} name={`email`} placeholder={`Email`} />
        <Input type={`textarea`} name={`message`} placeholder={`Message`} />
      </Form>
    </Modal>
  )
}

export default Contact
