const controller = {};
 
 

controller.list = (req, res)=>{
	req.getConnection((err, conn)=>{
		conn.query('SELECT * FROM peliculas', (err,peliculas)=>{
			if (err) {
				res.json(err);
			}

			res.render('customers.ejs', {
				data:peliculas
			});
		});

	});
	
};


 





controller.guardar = (req,res)=>{

	const data = req.body;
	
	req.getConnection((err,conn)=>{
		conn.query('INSERT INTO peliculas set ?', [data],(err, peliculas)=>{
			 if (err) {
				res.json(err);
			}
			 res.redirect('/');
		});
	})

};

 

controller.editar = (req,res)=>{

	const { id } = req.params;
	req.getConnection((err,conn)=>{
		conn.query('SELECT*FROM peliculas WHERE id = ?',[id], (err,peliculas)=>{
			res.render('customer_edita',{
				data:peliculas[0]
			})
		});
	});
	 

};


 


controller.nuevosdatos= (req,res)=>{
	const { id }= req.params;

	const nuevodato = req.body;
	req.getConnection((err,conn)=>{
		conn.query('UPDATE peliculas set ? WHERE id=?',[nuevodato,id], (err,rows)=>{
			 if (err) {
				res.json(err);
			}
			res.redirect('/');
		});
	});
};





controller.eliminar = (req,res)=>{

	const { id }= req.params;

	req.getConnection((err,conn)=>{
		conn.query('DELETE FROM peliculas WHERE id= ?',[id],(err,rows)=>{
			res.redirect('/');
		});
	})
 
};

 

module.exports = controller;