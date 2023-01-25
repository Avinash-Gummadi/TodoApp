import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import CustomModal from '../customModal'
import { styles } from './styles'
import { useDropdown } from '../../hooks'

const dropdownItems = [
  { label: 'Critical', value: 'critical' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const EditTaskModal = ({ open, task, handleCancel, handleEdit }) => {
  const [newTask, setNewTask] = useState(task)
  const [error, setError] = useState('')

  const { dropdownOpen, setIsDropdownOpen, dropdownValue, setDropdownValue, items, setItems } =
    useDropdown(dropdownItems)

  const handleChangeTitle = value => setNewTask({ ...newTask, title: value })
  const handleChangeDesc = value => setNewTask({ ...newTask, description: value })

  useEffect(() => {
    setNewTask(task)
    setDropdownValue(task?.priority)
  }, [task])

  const handleEditTask = () => {
    if (newTask?.title === '' || newTask?.description === '' || dropdownValue === null) {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    handleEdit(newTask.id, { ...newTask, priority: dropdownValue })
  }

  return (
    <CustomModal open={open}>
      <Text style={styles.modalHeading}>Edit Task</Text>

      <View style={styles.modalForm}>
        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Title</Text>
          <TextInput onChangeText={handleChangeTitle} value={newTask?.title} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Description</Text>
          <TextInput onChangeText={handleChangeDesc} value={newTask?.description} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Priority</Text>
          <DropDownPicker
            open={dropdownOpen}
            value={dropdownValue}
            items={items}
            setOpen={setIsDropdownOpen}
            setValue={setDropdownValue}
            setItems={setItems}
            placeholder="Select a priority"
            style={styles.modalFormInput}
            textStyle={styles.dropdownText}
            labelStyle={styles.dropdownLabel}
            dropDownContainerStyle={styles.dropdownContainer}
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>

        {error && (
          <View style={styles.modalFormError}>
            <Text style={styles.modalFormErrorText}>{error}</Text>
          </View>
        )}

        <View style={styles.modalFormActions}>
          <TouchableWithoutFeedback onPress={handleCancel}>
            <View style={[styles.modalFormAction, styles.secondaryButton, { marginRight: 6 }]}>
              <Text style={[styles.modalFormActionText, styles.modalFormActionTextSecondary]}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleEditTask}>
            <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
              <Text style={styles.modalFormActionText}>Save</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </CustomModal>
  )
}

export default EditTaskModal
