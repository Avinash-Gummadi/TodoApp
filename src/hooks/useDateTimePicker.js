import { useState } from 'react'

const useDateTimePicker = () => {
  const [time, setTime] = useState(new Date())
  const [showTime, setShowTime] = useState(true)
  const handleChangeTime = (evt, selectedTime) => {
    const currentTime = selectedTime || time
    setTime(currentTime)
    setShowTime(false)
    console.log("...................................................................................");
    console.log("current time: ", currentTime);
    console.log("time: ", time);
    console.log("showTime: ", showTime);
    console.log("selectedTime: ", selectedTime);
    console.log("...................................................................................");
  }

  return { time, setTime, handleChangeTime, showTime, setShowTime }
}

export default useDateTimePicker
