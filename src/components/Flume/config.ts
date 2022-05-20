import { FlumeConfig, Colors, Controls } from "flume";

const config = new FlumeConfig();
console.log('type of config', Object.keys( config))
config
    .addPortType({
        type: "string",
        name: "string",
        label: "Text",
        color: Colors.blue, 
        controls:[Controls.text({name: "string", label: "Text1", desc: "Text"})]
    })
    .addPortType({
        type: "boolean",
        name: "bool",
        label: "True/False",
        color: Colors.green,
        controls: [Controls.checkbox({name: "bool", label: "True/False"})]
    })
    .addPortType({
        type: "number",
        name: "num", 
        label: "0-N",
        color: Colors.red,
        controls: [Controls.number({name: "number", label: "0-N"})]
    })
    
    .addRootNodeType({
        type: "homepage",
        label: "Homepage",
        initialWidth: 170,
        inputs: (ports: any) => [
          ports.string({
            name: "title",
            label: "Title"
          }),
          ports.string({
            name: "description",
            label: "Description"
          }),
          ports.boolean({
            name: "showSignup",
            label: "Show Signup"
          }),
          ports.number({
            name: "copyrightYear",
            label: "Copyright Year"
          }),
          ports.number({
            name: "sum",
            label: "Sum of Two"
          })
        ]
      })
    .addNodeType({
        type: "user",
        label: "User",
        description: "Outputs attributes of the current user",
        initialWidth: 130,
        outputs: (ports: any) =>
         [
          ports.string({
            name: "firstName",
            label: "First Name"
          }),
          ports.string({
            name: "lastName",
            label: "Last Name"
          }),
          ports.boolean({
            name: "isLoggedIn",
            label: "Is Logged-In"
          }),
          ports.boolean({
            name: "isAdmin",
            label: "Is Admin"
          })
        ]
    }
      )
      .addNodeType({
        type: "joinText",
        label: "Join Text",
        description: "Combines two strings of text into one string",
        initialWidth: 160,
        inputs: (ports: any) => [
          ports.string({
            name: "string1",
            label: "First text"
          }),
          ports.string({
            name: "string2",
            label: "Second text"
          })
        ],
        outputs: (ports: any) => (data: any, connections: any)=>{
            if (!data.string1.string) return []
            if (!data.string2.string) return []
            return [ports.string({name: "joinedText",label: "Joined Text"}),]
        }
      })
      .addNodeType({
        type: "reverseBoolean",
        label: "Reverse True/False",
        description: "Reverses a true/false value",
        initialWidth: 140,
        inputs: (ports: any) => [
          ports.boolean(),
        ],
        outputs: (ports: any) => [
          ports.boolean(),
        ]
      })
      .addNodeType({
          type: "addTwo",
          label: "Addition",
          description: "adds two numbers",
          inputs: (ports: any)=>[ports.number({name:'Number1', label:'number1'}), ports.number({name:'Number2', label:'number2'})],
          outputs: (ports: any)=>[ports.number({name:'sum', label:'sum'})]
      })
    

export default config;