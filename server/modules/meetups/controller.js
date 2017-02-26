import Meetup from './model'

export const createMeetup = async(req, res) => {
    const { title, description } = req.body;
    const newMeetup = new Meetup({ title, description })

    if (!title) {
        return res.status(400).json({ error: true, message: 'title must be provided' })
    } else if (typeof title !== 'string') {
        return res.status(400).json({ error: true, message: 'title must be a string' })
    } else if (title.length < 5) {
        return res.status(400).json({ error: true, message: 'name must be 5 characters long!' })
    }

    if (!description) {
        return res.status(400).json({ error: true, message: 'Description must be provided' })
    } else if (typeof description !== 'string') {
        return res.status(400).json({ error: true, message: 'Description must be a string' })
    } else if (description.length < 10) {
        return res.status(400).json({ error: true, message: 'Description must be 5 characters long!' })
    }



    try {
        return res.status(201).json({ meetup: await newMeetup.save() })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: "errpr with meetup" })
    }
}
export const allMeetups = async(req, res) => {

    try {
        return res.status(200).json({ meetups: await Meetup.find({}) })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: "errpr with meetup" })
    }
}