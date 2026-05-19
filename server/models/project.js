const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Project name is required'],
			trim: true,
		},
		summary: {
			type: String,
			required: [true, 'Project summary is required'],
			trim: true,
		},
		details: {
			type: String,
			required: [true, 'Project details are required'],
			trim: true,
		},
		stack: {
			type: [String],
			default: [],
		},
		link: {
			type: String,
			trim: true,
		},
		liveLink: {
			type: String,
			trim: true,
		},
		image: {
			type: String,
			trim: true,
		},
		featured: {
			type: Boolean,
			default: false,
		},
		order: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Project', projectSchema)
