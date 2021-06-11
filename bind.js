const obj = {
  name: 'rocks',

  getName: function test() {
    console.log('one: ', this.name)
  },
}

obj.getName() // this wont work, but it actually works

const newFunc2 = obj.getName.bind(obj)
newFunc2()
