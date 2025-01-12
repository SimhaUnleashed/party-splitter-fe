/* eslint-disable @typescript-eslint/no-explicit-any */

import forEach from 'lodash/forEach'

import { Cookies } from '@/libs'

type storageType = 'cookie' | 'localStorage' | 'session'

export const storageWriter = (type: storageType, data: any) => {
  function normalizeData(val: any) {
    return JSON.stringify(val)
  }

  switch (type) {
    case 'cookie': {
      forEach(data, (value: any, key: any) => {
        if (key) Cookies.set(key, normalizeData(value))
      })
      break
    }
    case 'localStorage':
      forEach(data, (value: any, key: any) => {
        if (key) localStorage.setItem(key, normalizeData(value))
      })
      break

    case 'session':
      forEach(data, (value: any, key: any) => {
        if (key) window.sessionStorage.setItem(key, normalizeData(value))
      })
      break
  }
}

export const storageReader = (type: storageType, key: string) => {
  switch (type) {
    case 'cookie': {
      let retrievedData = null

      try {
        retrievedData = JSON.parse(Cookies.get(key) || '')
      } catch (error) {
        retrievedData = Cookies.get(key) || ''
      }

      return retrievedData
    }
    case 'localStorage': {
      let retrievedData = null

      try {
        retrievedData = JSON.parse(localStorage.getItem(key) || '')
      } catch (error) {
        retrievedData = localStorage.getItem(key) || ''
      }

      return retrievedData
    }
  }
}
