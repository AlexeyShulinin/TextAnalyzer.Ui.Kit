import { IBaseItem } from '../../common/interfaces.ts';
import { ChangeEvent } from 'react';

export interface ISelectProps {
    options: IBaseItem[];
    value: number;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
