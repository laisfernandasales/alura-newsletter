const Article = ({title,text,tags,Image}) => {
    return <div>
<h3>(title)</h3>
<div>
    {
        text.map((content,index ) => <p key={index}> {content}</p>) //função map para percorrer o array de textos e exibir cada um deles em um parágrafo separado
    }
</div>
    </div>
}

export default Article;