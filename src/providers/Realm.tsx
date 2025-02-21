import React, { PropsWithChildren } from 'react'
import Realm from 'realm';
import { RealmProvider } from '@realm/react';
import { Task } from '../models/Tasks';

const RootRealmProvider = ({ children }: PropsWithChildren) => {
    return (
        <RealmProvider schema={[Task]} >
            {children}
        </RealmProvider>
    )
}

export default RootRealmProvider