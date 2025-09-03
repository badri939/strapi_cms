export default () => ({
	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: 'smtp.ethereal.email',
				port: 587,
				auth: {
					user: 'lowell.bode@ethereal.email', // Replace with your Ethereal user
					pass: 'n3Ufhpaagd9NspUdXk', // Replace with your Ethereal password
				},
			},
			settings: {
				defaultFrom: 'no-reply@example.com',
				defaultReplyTo: 'no-reply@example.com',
			},
		},
	},
});
