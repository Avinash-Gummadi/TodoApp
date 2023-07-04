import React from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { colors } from '../../theme'
import CustomModal from '../customModal'
import { styles } from './styles'

const AddReminderModal = ({
  open,
  reminder,
  time,
  showTime,
  handleShowTime,
  handleChangeTitle,
  handleChangeDesc,
  handleChangeTime,
  handleCancel,
  handleAddReminder
}) => {
  return (
    <CustomModal open={open}>
      <Text style={styles.modalHeading}>Add Reminder</Text>

      <View style={styles.modalForm}>
        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Title</Text>
          <TextInput onChangeText={handleChangeTitle} value={reminder.title} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Description</Text>
          <TextInput onChangeText={handleChangeDesc} value={reminder.description} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Time</Text>
          <Text style={styles.modalFormInput} onPress={handleShowTime}>{time?.toLocaleString()}</Text>
          <Text style={styles.modalFormLabel}>{!showTime ? 'Click to select time' : 'Click to change time'}</Text>
          {showTime && <DateTimePicker
            value={time}
            mode="time"
            is24Hour={false}
            onChange={handleChangeTime}
            style={styles.timePicker}
            textColor={colors.text}
          />}
        </View>

        <View style={styles.modalFormActions}>
          <TouchableWithoutFeedback onPress={handleCancel}>
            <View style={[styles.modalFormAction, styles.secondaryButton, { marginRight: 6 }]}>
              <Text style={[styles.modalFormActionText, styles.modalFormActionTextSecondary]}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleAddReminder}>
            <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
              <Text style={styles.modalFormActionText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </CustomModal>
  )
}

export default AddReminderModal
