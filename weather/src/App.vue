<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnitToggler from './components/exercise/UnitToggler.vue'

import SampleOne from './components/practices/basic/SampleOne.vue'
import SampleTwo from './components/practices/basic/SampleTwo.vue'
import EventBasic from './components/practices/events/EventBasic.vue'
import EventObject from './components/practices/events/EventObject.vue'
import EventModifier from './components/practices/events/EventModifier.vue'
import ModelBasic from './components/practices/forms/ModelBasic.vue'
import FormElements from './components/practices/forms/FormElements.vue'
import ModelModifiers from './components/practices/forms/ModelModifiers.vue'
import StyleExample from './components/practices/styles/StyleExample.vue'
import WeatherMockup from './components/practices/challenges/WeatherMockup.vue'
import MethodVsComputed from './components/practices/reactivity/MethodVsComputed.vue'
import WatchBasic from './components/practices/reactivity/WatchBasic.vue'
import WatchMultiSource from './components/practices/reactivity/WatchMultiSource.vue'
import WatchDeep from './components/practices/reactivity/WatchDeep.vue'
import WatchReactive from './components/practices/reactivity/WatchReactive.vue'
import WatchEffectBasic from './components/practices/reactivity/WatchEffectBasic.vue'
import WeatherComposition from './components/practices/challenges/WeatherComposition.vue'
import LifecycleDemo from './components/practices/lifecycle/LifecycleDemo.vue'
import EmitDemo1 from './components/practices/propsEmits/EmitDemo1.vue'
import EmitDemo2 from './components/practices/propsEmits/EmitDemo2.vue'
import PropsEmitsParent from './components/practices/propsEmits/PropsEmitsParent.vue'
import SlotDefaultParent from './components/practices/slots/SlotDefaultParent.vue'
import SlotNamedParent from './components/practices/slots/SlotNamedParent.vue'
import SlotScopedParent from './components/practices/slots/SlotScopedParent.vue'
import WeatherParent from './components/practices/challenges/weatherComponent/WeatherParent.vue'
import StoreCounter from './components/practices/library/StoreCounter.vue'
import AxiosWeather from './components/practices/axios/AxiosWeather.vue'
import AxiosJson from './components/practices/axios/AxiosJson.vue'
import RegisterForm from './components/practices/elementPlus/RegisterForm.vue'
import ProductWidget from './components/practices/elementPlus/ProductWidget.vue'
import FeedbackProgress from './components/practices/elementPlus/FeedbackProgress.vue'
</script>

<template>
  <div style="padding: 20px">
    <SampleOne />
    <SampleTwo />
    <EventBasic />
    <EventObject />
    <EventModifier />
    <ModelBasic />
    <FormElements />
    <ModelModifiers />
    <StyleExample />
    <WeatherMockup />
    <MethodVsComputed />
    <WatchBasic />
    <WatchMultiSource />
    <WatchDeep />
    <WatchReactive />
    <WatchEffectBasic />
    <WeatherComposition />
    <LifecycleDemo />
    <EmitDemo1 />
    <EmitDemo2 />
    <PropsEmitsParent />
    <SlotDefaultParent />
    <SlotNamedParent />
    <SlotScopedParent />
    <WeatherParent />
    <StoreCounter />
    <AxiosWeather />
    <AxiosJson />
    <RegisterForm />
    <ProductWidget />
    <FeedbackProgress />

    <nav style="margin: 20px 0; display: flex; align-items: center; justify-content: space-between">
      <div style="display: flex; gap: 16px">
        <RouterLink to="/">🌤 날씨 대시보드</RouterLink>
        <RouterLink to="/about">📄 서비스 소개</RouterLink>
      </div>
      <UnitToggler />
    </nav>

    <RouterView />
  </div>
</template>
