type subcriber = {
    id: number,
    callback: Function
}

const clickHandler = () => {
    let subcribers: subcriber[] = [];
    return {
        subscribe: (callback: Function) => {
            const id = Math.random();
            subcribers.push({id, callback});
            return {
                remove: () => {
                    subcribers = subcribers.filter(x => x.id !== id);
                }
            }
        },
        publish: (event: Event) => {
            subcribers.map(subscriber => subscriber.callback(event))
        }
    }
}

let pubSub = clickHandler();

if (typeof window !== 'undefined') {
    window.addEventListener("click", pubSub.publish)
}


export default pubSub;
