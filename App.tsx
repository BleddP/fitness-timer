import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Components
import Settings from './components/ui/Settings';
import Ring from './components/ui/Ring'
import Counter from './components/ui/Counter';
import Button from './components/ui/Button';

// Typography
import Header from './components/typography/Header/Header';

// styles
import theme from './theme'

export default function App() {

  const [settings, setSettings] = useState({
    sets: 5,
    duration: 30,
    rest: 60
  })
  const [remainingSets, setRemainingSets] = useState(settings.sets)
  const [count, setCount] = useState(settings.duration)
  const [rest, setRest] = useState(settings.rest)
  const [timer, setTimer] = useState(null)
  const [restTimer, setRestTimer] = useState(null)
  const [isResting, setIsResting] = useState(null)

  // Methods 
  const handleSettingsChange = (id: string, value: number) => {
    setSettings({ ...settings, [id]: value })
  }

  const startTimer = () => {
    setCount(settings.duration)
    setIsResting(false)
    setTimer(setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000))
  }

  const startResting = () => {
    setRest(settings.rest)
    setIsResting(true)
    setRemainingSets(prev => prev - 1)
    setRestTimer(setInterval(() => {
      setRest((prev) => prev - 1)
    }, 1000))
  }

  // Reactive
  useEffect(() => {
    if (count === 0 && remainingSets === 1) {
      clearInterval(timer)
      clearInterval(restTimer)
      setIsResting(null)
      console.log('Workout is done!')
      setCount(settings.duration)
      setRest(settings.rest)
      setRemainingSets(settings.sets)
    }

    if (count === -1) {
      console.log('Set is done')
      clearInterval(timer)
      startResting()
    }

  }, [count])

  useEffect(() => {
    if (rest === -1) {
      console.log('Rest is done, get back to work!')
      clearInterval(restTimer)
      startTimer()
    }
  }, [rest])

  return (
    <View style={styles.container}>
      {isResting && <Header>Take a short break...</Header>}
      <Ring count={isResting ? rest : count} color={!isResting ? theme.success : theme.warning} />
      {/* <Settings settings={settings} setSettings={handleSettingsChange} /> */}
      <Button onClick={startTimer}>Start timer</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
