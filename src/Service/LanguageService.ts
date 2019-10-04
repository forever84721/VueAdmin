import { enUS } from '../assets/i18n/en-US';
import { zhHK } from '../assets/i18n/zh-HK';
import { zhCN } from '../assets/i18n/zh-CN';

import Vue from 'vue';

const languagePackage = {
  'en-US': enUS,
  'zh-HK': zhHK,
  'zh-CN': zhCN
};
export default class LanguageService {
  private static instance: LanguageService;
  // private Langpack: Language = languagePackage['en-US'];

  public Langpack = Vue.observable({
    langpack: languagePackage['en-US']
  });
  private constructor(Lang: 'en-US' | 'zh-HK' | 'zh-CN') {
    this.Langpack.langpack = languagePackage[Lang];
  }

  public static get Instance() {
    return this.instance || (this.instance = new this('en-US'));
  }

  public SetLanguage(Lang: 'en-US' | 'zh-HK' | 'zh-CN'): void {
    this.Langpack.langpack = languagePackage[Lang];
  }

  public GetLanguage() {
    return this.Langpack.langpack;
  }
}
