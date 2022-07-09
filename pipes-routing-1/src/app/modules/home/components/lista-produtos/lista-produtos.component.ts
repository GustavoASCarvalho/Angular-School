import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {
      nome: 'Celular Samsung',
      descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting`,
      fabricante: 'Samsung',
      preco: 1999.99,
      imagem: 'https://imagens.trocafone.com/images/phones/dt-galaxy-s20-plus-preto-frente.png',
      data: new Date('2020-01-01')
    },
    {
      nome: 'Notebook Asus',
      descricao: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words`,
      fabricante: 'Asus',
      preco: 2999.99,
      imagem: 'https://conteudoproduto.magazineluiza.com.br/13/135302000/X543_i3_7th_SSD256GB/img/notebook-x543.png',
      data: new Date('2020-05-02')
    },
    {
      nome: 'Tablet Motorola',
      fabricante: 'Motorola',
      descricao: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form`,
      preco: 999.99,
      imagem: 'https://brmotorolanew.vtexassets.com/arquivos/ids/161114-800-auto?v=637818443806770000&width=800&height=auto&aspect=true',
      data: new Date('2022-01-05')
    },
    {
      nome: 'Celular Apple',
      fabricante: 'Apple',
      descricao: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      preco: 5999.99,
      imagem: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346280',
      data: new Date('2023-01-01')
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
