/*----------  single source to import and use all third party libraries components  ----------*/

/*----------  Alias all components with 'Native' prefix for differentiation between custom and library components  ----------*/

/*----------  Imports  ----------*/
import {
  ActionIcon as NativeActionIcon,
  ActionIconProps as NativeActionIconProps,
  Alert as NativeAlert,
  AlertProps as NativeAlertProps,
  Button as NativeButton,
  ButtonProps as NativeButtonProps,
  Card as NativeCard,
  CardProps as NativeCardProps,
  Fieldset as NativeFieldset,
  FieldsetProps as NativeFieldsetProps,
  Flex as NativeFlex,
  FlexProps as NativeFlexProps,
  Group as NativeGroup,
  GroupProps as NativeGroupProps,
  MultiSelect as NativeMultiSelect,
  MultiSelectProps as NativeMultiSelectProps,
  NumberInput as NativeNumberInput,
  NumberInputProps as NativeNumberInputProps,
  Pill as NativePill,
  PillProps as NativePillProps,
  ScrollArea as NativeScrollArea,
  ScrollAreaProps as NativeScrollAreaProps,
  Text as NativeText,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  TextProps as NativeTextProps,
} from '@mantine/core'
import {
  DatePickerInput as NativeDatePickerInput,
  DatePickerInputProps as NativeDatePickerInputProps,
} from '@mantine/dates'
import { Dropzone as NativeDropzone, DropzoneProps as NativeDropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import {
  Notifications as NativeNotifications,
  NotificationsProps as NativeNotificationProps,
} from '@mantine/notifications'
import { Link, Redirect, Route, Router, Switch } from 'wouter'

/*----------  Exports  ----------*/
export {
  IMAGE_MIME_TYPE,
  Link,
  NativeActionIcon,
  NativeAlert,
  NativeButton,
  NativeCard,
  NativeDatePickerInput,
  NativeDropzone,
  NativeFieldset,
  NativeFlex,
  NativeGroup,
  NativeMultiSelect,
  NativeNotifications,
  NativeNumberInput,
  NativePill,
  NativeScrollArea,
  NativeText,
  NativeTextInput,
  Redirect,
  Route,
  Router,
  Switch,
}

export type {
  NativeActionIconProps,
  NativeAlertProps,
  NativeButtonProps,
  NativeCardProps,
  NativeDatePickerInputProps,
  NativeDropzoneProps,
  NativeFieldsetProps,
  NativeFlexProps,
  NativeGroupProps,
  NativeMultiSelectProps,
  NativeNotificationProps,
  NativeNumberInputProps,
  NativePillProps,
  NativeScrollAreaProps,
  NativeTextInputProps,
  NativeTextProps,
}
