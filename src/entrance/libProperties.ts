import { MyComp } from 'components';

const toExport = {  MyComp };

export type LibProperties = typeof toExport;

export default toExport;
