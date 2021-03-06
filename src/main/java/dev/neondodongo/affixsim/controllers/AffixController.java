package dev.neondodongo.affixsim.controllers;

import dev.neondodongo.affixsim.models.Ability;
import dev.neondodongo.affixsim.models.SpecialAbilityFactor;
import dev.neondodongo.affixsim.models.data.AbilityDao;
import dev.neondodongo.affixsim.models.Stage;
import dev.neondodongo.affixsim.models.data.SpecialAbilityFactorDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;


@Controller
@RequestMapping("home")
public class AffixController {

    @Autowired
    private AbilityDao abilityDao;

    @Autowired
    private SpecialAbilityFactorDao safDao;

    @RequestMapping(value="affix")
    public String showSimulator(Model model) {
        ArrayList<Ability> basic = new ArrayList<>();
        ArrayList<Ability> special = new ArrayList<>();
        ArrayList<Ability> soul = new ArrayList<>();
        ArrayList<Ability> resist = new ArrayList<>();
        ArrayList<Ability> fever = new ArrayList<>();
        ArrayList<Ability> status = new ArrayList<>();
        ArrayList<Ability> other = new ArrayList<>();

        ArrayList<SpecialAbilityFactor> saf = new ArrayList<>();
        saf.add(new SpecialAbilityFactor(0,"None", 0));

        Stage stage = new Stage();

        for (Ability ability : abilityDao.findAll()) {
            if (ability.getAbilityType().equals("basic")) {
                basic.add(ability);
            }
            else if (ability.getAbilityType().equals("special")) {
                special.add(ability);
            }
            else if (ability.getAbilityType().equals("soul")) {
                soul.add(ability);
            }
            else if (ability.getAbilityType().equals("resist")) {
                resist.add(ability);
            }
            else if (ability.getAbilityType().equals("fever")) {
                fever.add(ability);
            }
            else if (ability.getAbilityType().equals("status")) {
                status.add(ability);
            }
            else {
                other.add(ability);
            }
        }

        for (SpecialAbilityFactor factor : safDao.findAll()) {
            saf.add(factor);
        }

        model.addAttribute("title", "PSO2 Affix Simulator");
        model.addAttribute("basic", basic);
        model.addAttribute("special", special);
        model.addAttribute("soul", soul);
        model.addAttribute("resist", resist);
        model.addAttribute("status", status);
        model.addAttribute("other", other);
        model.addAttribute("fever", fever);
        model.addAttribute("abilities", abilityDao.findAll());
        model.addAttribute("factors", safDao.findAll());
        model.addAttribute("saf", saf);
        model.addAttribute("stage", stage);

        return "home/affix";
    }
}
