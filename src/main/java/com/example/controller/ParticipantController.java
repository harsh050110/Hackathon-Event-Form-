package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.model.Participant;
import com.example.service.ParticipantService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/participants")
public class ParticipantController {

    @Autowired
    private ParticipantService service;

    @PostMapping
    public Participant register(@RequestBody Participant p) {
        return service.save(p);
    }

    @GetMapping
    public List<Participant> getAll() {
        return service.getAll();
    }
}
