const express = require('express')
const Project = require('../models/project')

const router = express.Router()

const normalizeProjectPayload = (body) => ({
	name: body.name,
	summary: body.summary,
	details: body.details,
	stack: Array.isArray(body.stack) ? body.stack : [],
	link: body.link,
	liveLink: body.liveLink,
	image: body.image,
	featured: body.featured ?? false,
	order: body.order ?? 0,
})

router.get('/', async (req, res) => {
	try {
		const projects = await Project.find().sort({ featured: -1, order: 1, createdAt: -1 })
		res.json(projects)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch projects' })
	}
})

router.get('/:id', async (req, res) => {
	try {
		const project = await Project.findById(req.params.id)

		if (!project) {
			return res.status(404).json({ error: 'Project not found' })
		}

		res.json(project)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch project' })
	}
})

router.post('/', async (req, res) => {
	try {
		const payload = normalizeProjectPayload(req.body)

		if (!payload.name || !payload.summary || !payload.details) {
			return res.status(400).json({
				error: 'name, summary, and details are required',
			})
		}

		const project = await Project.create(payload)
		res.status(201).json(project)
	} catch (error) {
		res.status(500).json({ error: 'Failed to create project' })
	}
})

router.put('/:id', async (req, res) => {
	try {
		const payload = normalizeProjectPayload(req.body)
		const project = await Project.findByIdAndUpdate(req.params.id, payload, {
			new: true,
			runValidators: true,
		})

		if (!project) {
			return res.status(404).json({ error: 'Project not found' })
		}

		res.json(project)
	} catch (error) {
		res.status(500).json({ error: 'Failed to update project' })
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const project = await Project.findByIdAndDelete(req.params.id)

		if (!project) {
			return res.status(404).json({ error: 'Project not found' })
		}

		res.json({ message: 'Project deleted successfully' })
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete project' })
	}
})

module.exports = router
