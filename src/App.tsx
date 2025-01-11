import React from 'react'

import View from './ui/components/View'
import Text from './ui/components/Text'
import Form from './ui/components/Form'
import useModalStore from './store/Modal'
import chalk from 'chalk'

const App = () => {
  console.log(chalk.greenBright("A VCard, also known as a virtual business card, is an electronic file that contains contact information and other details about an individual or organization. It's a digital equivalent of a traditional paper business card."))
  const {openModal} = useModalStore()
  console.log(chalk.red('Hello', chalk.underline.bgBlue('Please fill the details and get your card 🚨🚨🦉') + '!'));


  return (
    <div className='h-fit p-5 bg-black'>
      <div className='text-center '>
      <Text color='primary' fontSize='xxxl' text='Generate your own Business Card!' textType='Heading'/>
      <div className='m-auto py-10 w-fit'>
      <Form/>
      {
        openModal && (<View/>)
      }
       </div>
      </div>
    </div>
  )
}

export default App
