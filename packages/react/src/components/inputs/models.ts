import { ClassType, Component, ComponentClass, FunctionComponent, ReactNode } from 'react';

type BaseComponent<TProps> = FunctionComponent<TProps> | ClassType<TProps, Component<TProps>, ComponentClass<TProps>>;

export type FormInputProps = { id: string };
export type FormInput = BaseComponent<FormInputProps>;

export type FormContainerProps = { id: string; children?: ReactNode };
export type FormContainer = BaseComponent<FormContainerProps>;
