import test from 'node:test';
import assert from 'node:assert/strict';
import {duration,format,csv} from '../public/time.js';
const day={date:'2026-10-22',start:'08:00',pauseStart:'12:00',pauseEnd:'13:00',end:'17:00'};
test('jornada com intervalo soma oito horas',()=>assert.equal(duration(day),480));
test('jornada sem intervalo',()=>assert.equal(duration({...day,pauseStart:'',pauseEnd:'',end:'12:00'}),240));
test('rejeita horários invertidos e intervalos incompletos ou externos',()=>{for(const change of [{end:'07:00'},{pauseEnd:''},{pauseStart:'07:00'},{pauseEnd:'18:00'}])assert.throws(()=>duration({...day,...change}));});
test('formata saldo negativo',()=>assert.equal(format(-90),'−01:30'));
test('CSV contém horários e total calculado',()=>{assert.match(csv([day]),/"08:00"/);assert.match(csv([day]),/"00:00"/);});
