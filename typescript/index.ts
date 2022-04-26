import { OS, DEVICE_type, DEVICE_finiteType } from 'uadetect'


if (DEVICE_type === 'mobile') {
    document.getElementById('header').innerHTML = 'Mobile';
}