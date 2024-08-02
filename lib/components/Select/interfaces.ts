import { ChangeEvent } from 'react';
import { IBaseItem } from '../../common/interfaces.ts';

export interface ISelectProps {
    options: IBaseItem[];
    value: number;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
