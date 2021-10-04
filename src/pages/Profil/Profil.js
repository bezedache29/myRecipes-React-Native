import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profil = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>Ma page de profile</Text>
    </SafeAreaView>
  )
}

export default Profil