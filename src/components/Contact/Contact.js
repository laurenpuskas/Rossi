import React from 'react'

import Modal from '../UI/Modal'
import Form from '../UI/Form'
import Input from '../UI/Form/Input'
import { formTitle, formDescription } from '../../constants/text'

const Contact = (props) => {
  return (
    <Modal
      onClick={props.onClick}
      title={props.title ? props.title : formTitle}
      subtitle={props.subtitle ? props.subtitle : formDescription}
    >
      <Form name={`contact`} send={`Send`}>
        <Input
          type={`text`}
          name={`name`}
          placeholder={`First Name`}
          required
        />
        <Input
          type={`text`}
          name={`lastname`}
          placeholder={`Last Name`}
          required
        />
        <Input type={`tel`} name={`phone`} placeholder={`Phone`} />
        <Input type={`email`} name={`email`} placeholder={`Email`} required />
        <Input type={`textarea`} name={`message`} placeholder={`Message`} />
      </Form>
    </Modal>
  )
}

export default Contact
