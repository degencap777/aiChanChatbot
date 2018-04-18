import {StoreBase, AutoSubscribeStore, autoSubscribe} from 'resub'

@AutoSubscribeStore
export class ScreenStore extends StoreBase {
  private _type:'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'

  constructor() {
    super()
    this.startTrackingScreenType()
  }

  trackScreenType = () => {
    const width = window.innerWidth
    if(width >= 1920) {
      this._type = 'xl-desktop'
    } else if(width >= 1280) {
      this._type = 'lg-desktop'
    } else if(width >= 960) {
      this._type = 'md-desktop'
    } else if(width >= 600) {
      this._type = 'sm-tablet'
    } else {
      this._type = 'xs-phone'
    }
    this.trigger()
  }
  startTrackingScreenType = () => {
    this.trackScreenType()
    window.addEventListener('resize', this.trackScreenType)
  }

  @autoSubscribe
  type() {
    return this._type
  }
}

export default new ScreenStore()