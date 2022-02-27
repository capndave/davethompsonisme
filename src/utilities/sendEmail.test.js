import sendEmail from './sendEmail'

const emailDetails = {
	subject: 'test subject',
	name: 'Test Name',
	message: 'Hi from a the test',
	email: 'test@email.com'
}

it('sends an email', async () => {
	const response = await sendEmail(emailDetails)
	expect(response.status).toBe(200)
	expect(response.text).toBe('OK')
})
