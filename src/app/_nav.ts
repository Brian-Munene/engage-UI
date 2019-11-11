import {SurveyComponent} from './views/base/survey.component';
import {Component} from '@angular/core';

interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Home',
    url: '/base/home',
    icon: 'icon-puzzle'
  },
  {
    name: 'New Survey',
    url: '/base/new-survey',
    icon: 'icon-puzzle'
  },
  {
    name: 'Login',
    url: '/login',
    icon: 'icon-star'
  },
  {
    name: 'Register',
    url: '/register',
    icon: 'icon-star'
  },
  {
    name: 'Register Company',
    url: '/base/register-company',
    icon: 'icon-star'
  }
 ];

 