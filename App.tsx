import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

// Components
import Settings from './components/ui/Settings';
import Ring from './components/ui/Ring'
import ModalView from './components/ui/Modal';
import Button from './components/ui/Button';
import Background from './components/ui/Background';

// Typography
import Header from './components/typography/Header/Header';

// styles
import theme from './theme'

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [settings, setSettings] = useState({
    sets: 3,
    duration: 30,
    rest: 60
  })
  const [remainingSets, setRemainingSets] = useState(settings.sets)
  const [count, setCount] = useState(settings.duration)
  const [rest, setRest] = useState(settings.rest)
  const [timer, setTimer] = useState(null)
  const [restTimer, setRestTimer] = useState(null)
  const [isWorkingOut, setIsWorkingOut] = useState(false)
  const [isResting, setIsResting] = useState(null)

  // Methods 
  const showSettingsModal = () => {
    setModalVisible(true)
  }

  const handleSettingsChange = (id: string, value: number) => {
    setSettings({ ...settings, [id]: value })
  }

  const startTimer = () => {
    setIsWorkingOut(true)
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
    setCount(settings.duration)
    setRemainingSets(settings.sets)
  }, [settings])

  useEffect(() => {
    if (count === 0 && remainingSets === 1) {
      setIsWorkingOut(false)
      clearInterval(timer)
      clearInterval(restTimer)
      setIsResting(null)
      setCount(settings.duration)
      setRest(settings.rest)
      setRemainingSets(settings.sets)
    }

    if (count === -1) {
      clearInterval(timer)
      startResting()
    }

  }, [count])

  useEffect(() => {
    if (rest === -1) {
      clearInterval(restTimer)
      startTimer()
    }
  }, [rest])

  return (
    <Background>
      {isWorkingOut && remainingSets > 2 && <Header>Sets left: {remainingSets}</Header>}
      {isWorkingOut && remainingSets <= 2 && <Header>Only {remainingSets} {remainingSets === 1 ? 'set' : 'sets'} left!</Header>}
      <Ring count={isResting ? rest : count} isResting={isResting} />
      {isResting && <Header fadeIn color={theme.warning}>Take a short break...</Header>}
      {!isWorkingOut && <Button onClick={startTimer}>Start timer</Button>}
      {!isWorkingOut && <Button variant='secondary' onClick={showSettingsModal}>Change Settings</Button>}
      <StatusBar style="auto" />
      <ModalView 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        settings={settings}
        setSettings={handleSettingsChange} 
        />
    </Background>
  );
}
