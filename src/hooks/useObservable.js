import {useEffect} from 'react';

export default function useObservable(observable, setter) {
    useEffect(() => {
        let subscription = observable.subscribe(result => {
            setter(result)
        });
        return () => subscription.unsubscribe()
    }, [observable, setter])
}
