import { useComponetsStore } from "../../store/components";


export default function Setting(){
    const { components } = useComponetsStore();

    return <div>
        <pre>
            {JSON.stringify(components, null, 2)}
        </pre> 
    </div>
}