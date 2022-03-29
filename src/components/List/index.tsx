import React, { useState } from 'react';
import { isTypeNode } from 'typescript';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './list.module.scss';

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
};

function List({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={item.id}
            selecionaTarefa={selecionaTarefa}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;