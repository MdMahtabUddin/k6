import { get } from 'http'
import http from 'http/k6'
import { sleep } from 'k6'

export default function(){
    http.get('https://k6.io');
    sleep(1);
}