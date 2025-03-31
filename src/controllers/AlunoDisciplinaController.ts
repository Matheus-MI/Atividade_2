import { Request, Response } from "express";
import { Aluno } from "../models/Aluno";
import { Disciplina } from "../models/Disciplina";

export const listarDisciplinasDoAluno = async (req: Request, res: Response) : Promise<any> => { 
    const { alunoId } = req.params;

    const aluno = await Aluno.findByPk (alunoId, {
        include: { model: Disciplina },
    });
    
    if (aluno) {
        return res.json(aluno); 
    }
    return res.status(404).json({ error: "Aluno não encontrado." });
};

export const vincularAlunoADisciplina = async (req: Request, res: Response) : Promise<any> => { 
    const { alunoId, disciplinaId } = req.body;
    const aluno = await Aluno.findByPk(alunoId);
    const disciplina = await Disciplina.findByPk(disciplinaId);

    if (!aluno || !disciplina) {
        return res.status(404).json({ error: "Aluno ou disciplina não encontrada." });
    }

    await (aluno as any).addDisciplina (disciplina); 
    return res.json({ message: "Aluno vinculado à disciplina com sucesso!" });
};