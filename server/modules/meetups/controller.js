import Meetup from './model'

export const createMeetup = async(req, res) => {
    const { title, description } = req.body;
    const newMeetup = new Meetup({ title, description })

    try {
        return res.status(201).json({ meetup: await newMeetup.save() })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: "errpr with meetup" })
    }
}
export const allMeetups = async(req, res) => {

    try {
        return res.status(200).json({ meetup: await Meetup.find({}) })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: "errpr with meetup" })
    }
}